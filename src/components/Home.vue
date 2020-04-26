<template>
    <v-row>
        <v-col>
            <v-card class="mb-4">
                <v-card-title>
                    Table Schema
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field v-model="className" label="Class Name" />
                        <v-text-field v-model="tableName" label="Table Name" />

                        <v-row>
                            <v-switch v-model="timestamps" class="ma-2" label="Timestamps"></v-switch>
                        </v-row>
                    </v-form>
                </v-card-text>
            </v-card>
            <v-card class="mb-4">
                <v-card-title>Columns</v-card-title>
                <v-card-text>
                    <Column v-for="(column, $index) in columns" :key="$index" :index="$index" />
                    <v-btn color="primary" @click="addColumn">Add Column</v-btn>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col>
            <v-card>
                <v-card-title>
                    Preview
                </v-card-title>

                <v-card-text>
                    <ClassPreview />
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import Column from "./Column";
import ClassPreview from "./ClassPreview";
import { mapState } from "vuex";

export default {
    name: "Home",
    components: { Column, ClassPreview },
    computed: {
        ...mapState(['columns']),
        className: {
            get() {
                return this.$store.state.className;
            },
            set(value) {
                this.$store.dispatch('UPDATE_CLASS_NAME', value);
            }
        },
        tableName: {
            get() {
                return this.$store.state.tableName;
            },
            set(value) {
                this.$store.dispatch('UPDATE_TABLE_NAME', value);
            }
        },
        timestamps: {
            get() {
                return this.$store.state.timestamps;
            },
            set(value) {
                this.$store.dispatch('UPDATE_TIMESTAMPS', value);
            }
        }
    },
    methods: {
        addColumn() {
            this.$store.dispatch('ADD_COLUMN');
        }
    }
}
</script>